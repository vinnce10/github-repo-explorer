import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface RepositoryCardProps {
  name: string;
  description: string;
  stargazers_count: number;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  name,
  description,
  stargazers_count,
}) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
        boxShadow: 3,
        maxWidth: "300px",
        width: "100%",
        "@media (max-width: 600px)": {
          maxWidth: "100%",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ textAlign: "left" }}>{name}</span>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {stargazers_count} <span style={{ marginLeft: 4 }}>⭐</span>
          </Typography>
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1, textAlign: "left" }}
        >
          {description || "No description available"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RepositoryCard;
