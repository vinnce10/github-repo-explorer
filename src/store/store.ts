import { create } from "zustand";

interface GitHubStore {
  users: any[];
  currentUsers: any[];
  users1:any[];
  users2:any[];
  users3:any[];
  repositories: any[];
  currentRepositories:any[];
  repositories1:any[];
  repositories2:any[];
  repositories3:any[];
  selectedUser: string | null;
  loading: boolean;
  error: string | null;

  setUsers: (users: any[]) => void;
  setRepositories: (repos: any[]) => void;
  setSelectedUser: (user: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setCurrentUsers: (users: any[]) => void;
  setUsers1: (users: any[]) => void;
  setUsers2: (users: any[]) => void;
  setUsers3: (users: any[]) => void;
  setCurrentRepositories: (repos: any[]) => void;
  setRepositories1: (repos: any[]) => void;
  setRepositories2: (repos: any[]) => void;
  setRepositories3: (repos: any[]) => void;

}


export const useGitHubStore = create<GitHubStore>((set: any) => ({
  users: [],
  currentUsers:[],
  users1:[],
  users2:[],
  users3:[],
  currentRepositories:[],
  repositories1:[],
  repositories2:[],
  repositories3:[],
  repositories: [],
  selectedUser: null,
  loading: false,
  error: null,

  setUsers: (users: any) => set({ users }),
  setRepositories: (repos: any) => set({ repositories: repos }),
  setSelectedUser: (user: any) => set({ selectedUser: user }),
  setLoading: (loading: any) => set({ loading }),
  setError: (error: any) => set({ error }),
  setCurrentRepositories: (repos: any) => set({ currentRepositories: repos }),
  setCurrentUsers: (users: any) => set({ currentUsers: users }),
  setUsers1: (users: any) => set({ users1: users }),
  setUsers2: (users: any) => set({ users2: users }),
  setUsers3: (users: any) => set({ users3: users }),
  setRepositories1: (repos: any) => set({ repositories1: repos }),
  setRepositories2: (repos: any) => set({ repositories2: repos }),
  setRepositories3: (repos: any) => set({ repositories3: repos }),
}));
