import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader'; 
import GallaryBody from './components/GallaryBody';

function App(props){
  

    let data=props.data

    return(
      <>

        <GallaryFooter/>

        <GallaryHeader/>

        <GallaryBody imageData={data}/>

      </>
    )
}

export default App;