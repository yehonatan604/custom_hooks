import useAge from '../hooks/useAge';

const Ilan = (props) => {
    const { fragment } = useAge(props.age);

    return (
        <>
            <h1>Ilan</h1>
            {fragment}
        </>
    );
}

export default Ilan;