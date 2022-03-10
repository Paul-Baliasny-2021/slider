import './App.css';
import GoRound from '../GoRound/GoRound';
import { useEffect, useState } from 'react';
import api from '../utils/API';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function App() {

  // const [link, setLink] = useState('');
  // const [id, setId] = useState('');
  // const [keyword, setKeyword] = useState('');
  const [returnedPhotos, setReturnedPhotos] = useState([]);


  // function search(searchWord) {
  //   api.getCards(searchWord)
  //     .then(res => {
  //       console.log(res.results.map((data) => data.urls.regular))
  //     })
  // }

  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setReturnedPhotos(res.results.map(data => data))
        // setLink(res.results.map(data => data.urls.regular))
        // setId(res.results.map(data => data.id));
             console.log(res.results.map(data => data.urls.regular))
        console.log(res.results.map(data => data.id))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='app'>
      <SearchForm
        // keyword={keyword}
        // setKeyword={setKeyword}
        // onKeywordSubmit={search}
      />
      <GoRound infinite slides={returnedPhotos}>

        <GoRound.Page>
          <div className='app__slide slide-1' key={Math.random() * 1}>Slide 1</div>
        </GoRound.Page>
        <GoRound.Page>
          <div className='app__slide slide-2' key={Math.random() * 2}>Slide 2</div>
        </GoRound.Page>
        <GoRound.Page>
          <div className='app__slide slide-3' key={Math.random() *3}>Slide 3</div>
        </GoRound.Page>
      </GoRound>
      <Footer />
    </div>

  );
}

export default App;
