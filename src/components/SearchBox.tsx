// src/components/SearchBox.tsx
import React, { useState, useEffect } from "react";
import { searchUsers } from "../api";
import { useGitHubStore } from "../store/store";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

const SearchBox: React.FC<{ id: number }> = ({ id }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String| null>(null);
  const { 
    setUsers1,
    setUsers2,
    setUsers3, 
  } = useGitHubStore();  

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers(username);
      if (id == 1){
        setUsers1(results);
      }else if (id == 2){
        setUsers2(results);
      }else{
        setUsers3(results);
      }

    } catch (err) {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={2}>
        <TextField
          label="GitHub Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={loading}
          sx={{ padding: "10px" }}
        >
          {loading ? "Searching..." : "Search"}
        </Button>

        {error && <Typography color="error">{error}</Typography>}
      </Stack>
    </Box>
  );
};

export default SearchBox;
