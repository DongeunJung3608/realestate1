import {useNavigate} from 'react-router-dom';

// function ErrorPage({ history }) {
//     console.log(history);
//     return (
//       <div>
//         <button onClick={() => history.push("/")}>home으로 이동</button>
//       </div>
//     );
//   }

const ErrorPage = () => {
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <button onClick={() => navigate(-1)}>Go back</button>
    )
}
  
  export default ErrorPage;