import { SubscriberForm } from "../components/SubscriberForm";
import { BookingEquiryForm} from "../components/BookingEquiryForm";
import { ActivityFinder } from "../components/ActivityFinder" ;
import { UserStateDisplay } from '../components/UserStateDisplay';

export const CustomHookSandbox = () => {
    // NOTE STATES AND VARIABLES
    
    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div>
            <UserStateDisplay />
            <SandboxDecorator>
                <SubscriberForm></SubscriberForm>
            </SandboxDecorator>
            <SandboxDecorator>
                <BookingEquiryForm></BookingEquiryForm>
            </SandboxDecorator>
            <SandboxDecorator>
                <ActivityFinder></ActivityFinder>
            </SandboxDecorator>
        </div>
    )
}

export const SandboxDecorator = ({ children }) => {
    return (
        <div className="" style={{
            border: "solid 1px blue",
            width: "100%",
            padding: "10px", 
            margin: "10px"
            }}>
            {children}
        </div>
    )
}