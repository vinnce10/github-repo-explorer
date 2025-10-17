import React, { useEffect, useMemo, useState } from "react";
import { useGitHubStore } from "../store/store";
import { getRepositories } from "../api";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Box,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBox from "./SearchBox";
import RepositoryCard from "./RepositoryCard"; // Importing the new RepositoryCard component

interface UserListProps {
  id: number; // Accept id to map to the right store
}


const UserList: React.FC<UserListProps> = ({ id })  => {
  const {
    currentUsers,
    users1,
    users2,
    users3,
    setCurrentUsers,
    setRepositories,
    setRepositories1,
    setRepositories2,
    setRepositories3,
    setCurrentRepositories,
    setSelectedUser,
    loading,
    error,
    repositories1,
    repositories2,
    repositories3,
    currentRepositories,
  } = useGitHubStore();
  
  const [repoLoading, setRepoLoading] = useState(false);
  const [expandedUser, setExpandedUser] = useState<string | false>(false); // Track expanded user

  // Handle click to fetch repositories for selected user
  const handleUserClick = async (user: any) => {
    // Check if the clicked user is already expanded
    if (expandedUser === user.login) {
      // If already expanded, hide the repositories
      setExpandedUser(false);
      return;
    }

    setExpandedUser(user.login);
    setRepoLoading(true);
    try {
      
      const repos = await getRepositories(user.login);
      if (id == 1){
        setRepositories1(repos);
      }else if (id == 2){
        setRepositories2(repos);
      }else{
        setRepositories3(repos);
      }
    } catch (err) {
      console.error("Error fetching repositories:", err);
    } finally {
      setRepoLoading(false);
    }
  };

  // Toggle accordion expansion (open/close)
  const handleAccordionChange =
    (user: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedUser(isExpanded ? user : false); // Expand or collapse user’s repositories
  };

  const users = useMemo(() => {
    if (id === 1){
      return users1;
    }else if (id === 2){
      return users2;
    }
    return users3;

  },[users1, users2, users3]);

  const repositories = useMemo(() =>{
    if (id === 1){
      return repositories1;
    }else if (id === 2){
      return repositories2;
    }
    return repositories3;

  },[repositories1, repositories2, repositories3]);


  return (
    <Stack spacing={3} sx={{ background: "light-pink", padding: 2 }}>
      <SearchBox id={id}/>
      {users.map((user) => (
        <Box
          key={user.id}
          sx={{
            borderRadius: "8px",
            padding: "10px",
            boxSizing: "border-box",
          }}
          onClick={() => handleUserClick(user)}
        >
          <Stack direction="column" spacing={2}>
            <Accordion
              expanded={expandedUser === user.login}
              onChange={handleAccordionChange(user.login)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                   backgroundColor: "#f4f4f4",
                }}
              >
                <Typography>{user.login}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: "100%", overflowX: "auto" }}>
                <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
                  {repoLoading ? (
                    <Typography>Loading...</Typography>
                  ) : (
                    <Box sx={{ width: "100%" }}>
                      {repositories.map((repo: any) => (
                        <RepositoryCard
                          key={repo.id}
                          name={repo.name}
                          description={repo.description}
                          stargazers_count={repo.stargazers_count}
                        />
                      ))}
                    </Box>
                  )}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default UserList;
