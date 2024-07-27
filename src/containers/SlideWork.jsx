import { Movies, AppUser, PostListReducer } from "../components/RefUse";

export const SlideWork = () => {
    // NOTE STATES AND VARIABLES

    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div>
            <div style={{ border: "solid blue 1px", padding: "10px", margin: "10px"}}>
                <AppUser />
            </div>
            <div style={{ border: "solid blue 1px", padding: "10px", margin: "10px"}}>
                <Movies />  
            </div>
            <div style={{ border: "solid blue 1px", padding: "10px", margin: "10px"}}>
                <PostListReducer />  
            </div>
        </div>
    )
}