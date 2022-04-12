import "./UpdateActivity.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const handleUpdate = (() =>{

})
const [posts, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return null;

const UpdateActivity = () = {

return(
    <section className ="UpdateActivity">
    <div>
    </div>
    </section>
)

}

export default UpdateActivity;