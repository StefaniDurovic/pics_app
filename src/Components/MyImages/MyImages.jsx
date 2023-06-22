import { List } from "../List/List";
import { useFirestoreContext } from "../../context/FirestoreContext";
import { useAuthContext } from "../../context/AuthContext";
import { useMemo } from "react";

export const MyImages = () => {
    const { state } = useFirestoreContext();
    const { currentUser } = useAuthContext();

    const filtered = useMemo(() => {
        return (
            state.items.filter(item => {
            const username = currentUser?.displayName.split(" ").join("")
            return item.user === username?.toLowerCase()
            })
        )      
    }, [currentUser, state.items]);

    const count = currentUser && `You have ${filtered.length} image${
                  filtered.length > 1 ? "s" : ""
                }`;

    const items = currentUser ? filtered : [];
   

    return(
        <>
            <h1>My Images</h1>
            {count}
            <List items={items}/>
        </>
    )
}