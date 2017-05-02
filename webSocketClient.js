import webstomp from 'webstomp-client'
import SockJS from 'sockjs-client'

export default function onMessage(messageHandler) {
	let url = 'http://localhost:8081/websocket-endpoint'
	let stompClient = webstomp.over(new SockJS(url, {heartbeat: false}));
	stompClient.connect({}, function() {
		stompClient.subscribe('/topic/unicornNames', function(message) {
		   messageHandler(message);
		});
	});
}
