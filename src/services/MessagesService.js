import axios from 'axios';

export default {
  /**
   * Send request for get messgaes
   * @returns {Array}
   */

  get() {
    return axios.get("/db/messages.json")
  },
};
