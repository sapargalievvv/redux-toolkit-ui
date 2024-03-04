import { useSelector } from 'react-redux'

const LastName = () => {
    const lololo = useSelector((state) => (state.user.value))
    return <div className='font-bold'>{lololo}</div>
}

export default LastName
