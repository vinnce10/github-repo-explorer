
# GitHub Repository Explorer

This is a simple React app that allows users to search for GitHub users, view their repositories, and display repository details in a clean, responsive layout using Material-UI components. The application also uses **Zustand** for state management, with dynamic stores per user list.

# Link

https://vinnce10.github.io/github-repo-explorer/ 

## Features

- **Search GitHub Users**: Allows searching GitHub users by username.
- **Display Repositories**: View repositories of the selected GitHub user.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **State Management**: Uses Zustand to manage separate stores for each user list, ensuring independent data handling.

## Technologies

- **React**: Front-end framework for building the UI.
- **TypeScript**: Typed JavaScript for better development experience.
- **Material-UI**: A UI library for creating a responsive and modern interface.
- **Zustand**: A small, fast, and scalable state management tool.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (with npm)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vinnce10/github-repo-explorer.git
   cd github-repo-explorer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will start the app in development mode. You can view it by navigating to `http://localhost:3000` in your browser.

### Usage

1. **Search for GitHub users** by typing their username in the search bar.
2. **View repositories**: After clicking a user, their repositories will be displayed in an accordion-style panel.
3. **Toggle Repositories**: Clicking on a user’s name will either show or hide the repository details.
4. **Responsive Layout**: The app is designed to adapt to mobile and desktop viewports.

### File Structure

Here’s a brief overview of the project file structure:

```
src/
│
├── api/                  # API calls for GitHub data
│   └── index.ts          # Functions for fetching users and repositories
│
├── components/           # React components
│   ├── RepositoryCard.tsx # Component for displaying repository info
│   ├── ResponsiveLayout.tsx # Layout for displaying UserList components in a responsive grid
│   ├── SearchBox.tsx     # Search bar component for entering GitHub usernames
│   └── UserList.tsx      # Displays a list of users and their repositories
│
├── store/                # Zustand state management store
│   └── store.ts          # Store that holds users and repositories state
│
├── App.tsx               # Main application entry point
└── index.tsx             # ReactDOM render entry point
```

## State Management (Zustand)

The application uses Zustand to manage the state of users and repositories. Each `UserList` component gets its own store instance based on the `id` prop. This allows for independent data management for each section of the app.

### Example Store Setup:

```ts
export const useGitHubStore = create<GitHubStore>((set) => ({
  users1: [],
  users2: [],
  users3: [],
  repositories1: [],
  repositories2: [],
  repositories3: [],
  selectedUser: null,
  loading: false,
  error: null,

  setUsers1: (users: any) => set({ users1: users }),
  setUsers2: (users: any) => set({ users2: users }),
  setUsers3: (users: any) => set({ users3: users }),
  setRepositories1: (repos: any) => set({ repositories1: repos }),
  setRepositories2: (repos: any) => set({ repositories2: repos }),
  setRepositories3: (repos: any) => set({ repositories3: repos }),
  setSelectedUser: (user: string) => set({ selectedUser: user }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));
```

### Dynamic Store Management:

The `id` prop passed to each `UserList` component determines which state to use for each list (i.e., `users1`, `users2`, `repositories1`, `repositories2`, etc.).

## API Integration

The app uses GitHub's REST API to fetch user and repository data. Here are the main API functions:

### `searchUsers`:
Fetches GitHub users based on a search query.

```ts
export const searchUsers = async (username: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/users?q=${username}&per_page=5`
    );
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
```

### `getRepositories`:
Fetches repositories for a specific GitHub user.

```ts
export const getRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${BASE_URL}users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching repositories for ${username}`);
  }
};
```

## Customization

You can easily customize this application by adjusting the following:

1. **UI Components**: Modify Material-UI components to fit your desired design.
2. **API Queries**: Adjust the GitHub API queries to change the way users and repositories are fetched.
3. **State Management**: Modify the Zustand store to add additional functionality or states.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new pull request

---

### License

This project is open-source and available under the [MIT License](LICENSE).