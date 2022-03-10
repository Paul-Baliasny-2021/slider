import './Page.css';
import { useContext } from 'react';
import { GoRoundContext } from './context';

function Page() {

const { width } = useContext(GoRoundContext)

    return (
        <div className='page__main-container' 
        style={{
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
        }}></div>
    )
}

export default Page;