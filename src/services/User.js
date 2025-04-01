import app from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

class UserService {
  constructor() {
    this.auth = getAuth(app);
  }

  async registerUser(name, email, password) {
    try {
      const userCred = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await updateProfile(userCred.user, {
        displayName: name,
      });

      return userCred.user;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      const loginUserRes = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return loginUserRes.user;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }
}

let userService = new UserService();

export default userService;
