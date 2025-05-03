import { create } from 'zustand';

interface User {
    email: string,
    fullname: string,
    profile: string,
};

interface Chat {
    userQuestion: string,
    geminiAnswer: string
};

interface UserStore {
    user: User,
    chat: Chat[],
    setUser: (user: User) => void,
    setChat: (chat: Chat[]) => void,
};

const userStore = create<UserStore>()( set => {
    return {
        user: {
            email: "",
            fullname: "",
            profile: ""
        },
        chat: [],
        setUser: (user: User) => set({user}),
        setChat: (chat) => set({chat}),
    }
});

export default userStore;