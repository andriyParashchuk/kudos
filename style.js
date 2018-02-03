import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // general
  btnPrimary: {
    backgroundColor: '#47525E',
    borderRadius: 9,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal:25,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center'
  },
  btnPrimary_text: {
    fontSize: 18,
    color: '#fff'
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    color: '#47525E',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#47525E',
    marginBottom: 15
  },
  loader: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form_content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    width: '100%'
  },
  // home
  home_wrapper: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  home_img: {
    width: '100%',
    height: '41%'
  },
  home_content: {
    alignItems: 'center',
    padding: 50
  },
  home_title: {
    fontSize: 27,
    color: '#47525E',
    marginBottom: 5
  },
  home_text: {
    fontSize: 15,
    color: '#A3ADBD',
    marginBottom: 100
  },
  home_textSmall: {
    fontSize: 12,
    color: '#A3ADBD'
  },
  // profile
  profileWrapper: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  profileBox: {
    backgroundColor: '#e9e9e9',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  profileBox__holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileBox__circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#a1a1a1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  profileBox__initials: {
    color: '#fff',
    fontSize: 20
  },
  profileBox__fullName: {
    color: '#343f4b',
    fontSize: 18
  },
  // explore
  exploreWrapper: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  exploreBox: {
    marginBottom: 10
  },
  exploreBox__img: {
    width: '100%',
    height: 180
  },
  exploreHeart: {
    position:'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    zIndex: 2
  },
  exploreHeart__img: {
    width: 50,
    height: 45,
  },
  exploreHeart__text: {
    color: '#fff',
    fontSize: 25,
    position:'absolute',
    top: 5,
    zIndex: 3
  },
  exploreBox__text: {
    backgroundColor: '#e9e9e9',
    color: '#343f4b',
    padding: 15,
    fontSize: 18
  },
  // users
  usersWrapper: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  usersBox: {
    backgroundColor: '#e9e9e9',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  usersBox__holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  usersBox__circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#a1a1a1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  usersBox__initials: {
    color: '#fff',
    fontSize: 20
  },
  usersBox__fullName: {
    color: '#343f4b',
    fontSize: 18
  },
  usersBox__countKudos: {
    color: '#5a6978',
    fontSize: 18
  },
  usersBox__img: {
    width: 40,
    height: 30
  },
  // signOut
  signOut: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
    width: 100
  },
  signOut__text: {
    fontSize: 18,
    color: '#8190A5'
  },
});

export default styles;
