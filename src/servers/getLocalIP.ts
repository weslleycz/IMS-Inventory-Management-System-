export async function getLocalIP() {
    return new Promise((resolve, reject) => {
      const peerConnection = new RTCPeerConnection();
      peerConnection.createDataChannel("");

      peerConnection
        .createOffer()
        .then((offer) => peerConnection.setLocalDescription(offer))
        .catch((error) => reject(error));

      peerConnection.onicecandidate = (event) => {
        if (!event || !event.candidate) return;
        const candidate = event.candidate.candidate;
        const result = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(candidate);
        if (result) {
          resolve(result[1]);
          peerConnection.close();
        }
      };
    });
  }