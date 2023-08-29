import ChildComponent from '../components/ChildHomeComponent'
import ParentCounterComponent from '../components/ParentCounterComponent'
import DummyAPIComponent from '../components/DummyApiComponent'
import RestAPITable from '../components/BootstrapRestApiTableComponent'
import { MyComponent } from '../components/MyComponent'

export default function Home() {
   // const navigate = useNavigate()
   // const [authenticated, setauthenticated] = useState(null)
    const message = 'Hello from the parent component!'

    /*
    useEffect(() => {
        
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
        if (checkToken()){
            console.log("checkToken : " + checkToken)
            navigate('/login')
        }
      }, []);
      */
    return (
        <div className="App">
            <MyComponent></MyComponent>
            <ChildComponent message={message} />
            <ParentCounterComponent></ParentCounterComponent>
            <DummyAPIComponent></DummyAPIComponent>
            <RestAPITable></RestAPITable>
        </div>
    )
}
