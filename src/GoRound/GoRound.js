import { useState, useEffect, Children, cloneElement, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Page from './Page';
import './GoRound.css';
import { GoRoundContext } from './context';
const TRANSITION_DURATION = 400;

function GoRound({ children, infinite }, props) {

    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(450);
    const [pages, setPages] = useState([]);
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION);
    const [clonesNumber, setClonesNumber] = useState({ start: 0, end: 0 });

    const windowElementRef = useRef();

    // useEffect(() => {
    //     if (infinite) {
    //         setPages([
    //             cloneElement(children[Children.count(children) - 1]),
    //             ...children,
    //             cloneElement(children[0]),
    //         ])
    //         setClonesNumber({ start: 1, end: 1 })
    //         console.log(pages)
    //         return
    //     }
    //     setPages(children);
       
    // }, [children, infinite])

    useEffect(() => {
        if (infinite) {
            setPages([
                cloneElement(props.slides[Children.count(props.slides) - 1]),
                ...props.slides,
                cloneElement(props.slides[0]),
            ])
            setClonesNumber({ start: 1, end: 1 })
            return
        }
        setPages(props.slides);
       
    }, [props.slides, infinite])

    useEffect(() => {
        const handleResize = () => {
            const wid = windowElementRef.current.offsetWidth;
            setWidth(wid);
            setOffset(-clonesNumber.start * width);
        }
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [clonesNumber, width]);

    useEffect(() => {

        if (!infinite) return

        if (offset === 0) {
            setTimeout(() => {
                setTransitionDuration(0);
                setOffset(-(width * (pages.length - 1 - clonesNumber.end)))
            }, TRANSITION_DURATION)
            return
        }
        if (offset === -(width * (pages.length - 1))) {
            setTimeout(() => {
                setTransitionDuration(0);
                setOffset(-(clonesNumber.start * width))
            }, TRANSITION_DURATION)
            return
        }

    }, [infinite, offset, width, pages, clonesNumber]);

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION)
        }
    }, [transitionDuration])

    const handleLeftSlide = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + width
            return Math.min(newOffset, 0)
        })
    };

    const handleRightSlide = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - width;
            const maxOffset = -(width * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <GoRoundContext.Provider value={{ width }}>
            <div className="goround__container">
                <FaChevronLeft className='goround__arrow' onClick={handleLeftSlide} onTouchEnd={handleLeftSlide} />
                <div className="goround__window" ref={windowElementRef}>
                    <div className="goround__slide-container" key={Math.random()}
                        style={{
                            transitionDuration: `${transitionDuration}ms`,
                            transform: `translateX(${offset}px)`,
                        }}>
                        {pages}
                    </div>
                </div>
                <FaChevronRight className='goround__arrow' onClick={handleRightSlide} onTouchEnd={handleRightSlide} />
            </div>
        </GoRoundContext.Provider>
    )
}

GoRound.Page = Page;

export default GoRound;