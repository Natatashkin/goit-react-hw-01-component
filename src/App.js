import './App.css';
import Container from './components/Container/Container';
import Profile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './dataBase/user.json';
import statisticalData from './dataBase/statistical-data.json';
import friends from './dataBase/friends.json';

function App() {
  return (
    <Container>
      <>
        <h1>Задание 1</h1>
      </>
      <Profile
        userName={user.name}
        userTag={user.tag}
        userLocation={user.location}
        userAvatar={user.avatar}
        stats={user.stats}
      />
      <>
        <h1>Задание 2</h1>
      </>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <>
        <h1>Задание 3</h1>
      </>
      <FriendList friends={friends} />
    </Container>
  );
}

export default App;
