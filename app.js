import Web3 from "web3";
import { abi } from "./abi.js";
const contractAddress = "0x7419694a09c21fc4d75f461d348520f3e8a506f6";

const webSocketProvider = new Web3.providers.WebsocketProvider(
  "ws://yourwebsockethere"
);

const web3 = new Web3(webSocketProvider);
const contract = new web3.eth.Contract(abi, contractAddress);

async function subscribeToEvents() {
  try {
    const subscription = await contract.events.allEvents();

    subscription.on("data", (event) => {
      console.log(event);
    });

    subscription.on("error", (error) => {
      console.error(error);
    });

    webSocketProvider.on("connect", () => {
      console.log("Connected to WebSocket provider.");
    });
  } catch (error) {
    console.error("Error subscribing to events:", error);
  }
}

subscribeToEvents();
