import './Loader.css'

/**
 * A component that displays a loader animation.
 *
 * @returns {JSX.Element} The rendered Loader component.
 *
 * @example
 * return <Loader />
 */
const Loader = () => {
    return (
        <div className="loader">
            <div className="bounce">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
            </div>
        </div>
    )
}

export default Loader
