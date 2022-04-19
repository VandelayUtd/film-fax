import React from 'react'
// import mitchumUrl from '../../assets/2096001.jpg'

// const styles = {
//     homeContainer: {
//         display: 'flex',    
//         direction: 'column',
//     },

//     image: { 
//         width: '100%', 
//     }
// }

const styles = {
    // container: {
        // background: `linear-gradient(#000000, #666666)`,
    //     display: 'flex',
    //     width: '100vw',
    //     height: '100vh',
    // },

    title: {
        textAlign: 'center',
        fontFamily: 'Poiret One',
        color: 'white',
        fontSize: 80,          
    }
}

const Home = () => {
    return (
        <div>
            <div style={{alignItems: 'center'}}>
                <h1 style={styles.title}>Welcome to The Movies</h1>
            </div>
        </div>
    )
}

export default Home; 
