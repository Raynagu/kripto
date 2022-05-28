import Coins from '../components/Coins';
import SearchBar from '../components/SearchBar';


const Home = ({setSearchKey, coinList, refreshHandler, isLoading, errors}) => {

  return (
    <div className="Home">
      <SearchBar
        setSearchKey={setSearchKey}
        refreshHandler={refreshHandler}
      />
      {isLoading ? (
        <h3 className='text-center'>Loading the cryptos....</h3>
      ) : errors ? <h3 className='text-center'>Oops.. {errors}.  Try again later.</h3> : (
        <Coins coins={coinList}/>
      )}
    </div>
  );
};

export default Home;
