import axios from "axios";
import { BlockData } from "./globalTypes";

export const getBlocks = () => {
  return axios
    .get("https://vm.aleo.org/api/testnet3/latest/block")
    .then(function (response) {
      // handle success
      return response["data"];
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
