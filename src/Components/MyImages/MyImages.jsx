import { List } from "../List/List";
import { useFirestoreContext } from "../../context/FirestoreContext";
import { useAuthContext } from "../../context/AuthContext";
import { useMemo } from "react";

export const MyImages = () => {
    const { state } = useFirestoreContext();
    const { currentUser } = useAuthContext();

    const items = useMemo(() => {
        const filtered = state.items.filter(item => {
            const username = currentUser?.displayName.split(" ").join("")
            return item.user === username?.toLowerCase()
        })
        return currentUser ? filtered : []
    }, [state.items, currentUser])

    return(
        <>
            <h1>My Images</h1>
            <List items={items}/>
        </>
    )
}
