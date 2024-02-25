import useAge from "../hooks/useAge";

const Oran = (props) => {
    const { fragment } = useAge(props.age);

    return (
        <>
            <h1>Oran</h1>
            {fragment}
        </>
    );
}

export default Oran;