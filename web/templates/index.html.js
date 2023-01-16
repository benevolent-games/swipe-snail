import { html } from "xiome/x/toolbox/hamster-html/html.js";
import pageHtml from "../partials/page.html.js";
const urls = {
    github: "https://github.com/benevolent-games/swipe-snail",
    website: "https://benevolent.games/",
    bobrosslipsum: "https://www.bobrosslipsum.com/"
};
export default (context) => pageHtml({
    ...context,
    mainContent: html `
		<snail-system>
			<snail-panel data-route="#/left">
				<h2>Left-hand panel</h2>
			</snail-panel>

			<snail-panel data-route="#/">
				<h1>🐌 swipe-snail</h1>

				<nav>
					<a href="#/left">#/left</a>
					<a href="#/">#/</a>
					<a href="#/right">#/right</a>
				</nav>

				<p>swipe-snail is for mobile-friendly navigation of horizontal panels</p>

				<nav>
					<a href="${urls.github}">github</a>
					<a href="${urls.website}">benevolent.games</a>
				</nav>

				<p>now here's some <a href="${urls.bobrosslipsum}" target="_blank">bob ross ipsum</a></p>

				<blockquote>
					<p>There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Everyone is going to see things differently - and that's the way it should be. Clouds are free. They just float around the sky all day and have fun. Everyone needs a friend. Friends are the most valuable things in the world. Learn when to stop. Here's another little happy bush</p>
					<p>See there, told you that would be easy. There's nothing wrong with having a tree as a friend. Mountains are so simple, they're hard. Didn't you know you had that much power? You can move mountains. You can do anything. Just pretend you are a whisper floating across a mountain. We'll throw some old gray clouds in here just sneaking around and having fun.</p>
					<p>Play with the angles. Making all those little fluffies that live in the clouds. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is the way you take out your flustrations. We must be quiet, soft and gentle. There are no limits in this world.</p>
					<p>I thought today we would do a happy little picture. Just let this happen. We just let this flow right out of our minds. A happy cloud.</p>
					<p>You got your heavy coat out yet? It's getting colder. Sometimes you learn more from your mistakes than you do from your masterpieces. When you do it your way you can go anywhere you choose.</p>
					<p>Let's just drop a little Evergreen right here. Anything you want to do you can do here. Just let go - and fall like a little waterfall. The little tiny Tim easels will let you down.</p>
					<p>We don't have to be concerned about it. We just have to let it fall where it will. Just take out whatever you don't want. It'll change your entire perspective. It's important to me that you're happy.</p>
					<p>There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Everyone is going to see things differently - and that's the way it should be. Clouds are free. They just float around the sky all day and have fun. Everyone needs a friend. Friends are the most valuable things in the world. Learn when to stop. Here's another little happy bush</p>
					<p>See there, told you that would be easy. There's nothing wrong with having a tree as a friend. Mountains are so simple, they're hard. Didn't you know you had that much power? You can move mountains. You can do anything. Just pretend you are a whisper floating across a mountain. We'll throw some old gray clouds in here just sneaking around and having fun.</p>
					<p>Play with the angles. Making all those little fluffies that live in the clouds. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is the way you take out your flustrations. We must be quiet, soft and gentle. There are no limits in this world.</p>
					<p>I thought today we would do a happy little picture. Just let this happen. We just let this flow right out of our minds. A happy cloud.</p>
					<p>You got your heavy coat out yet? It's getting colder. Sometimes you learn more from your mistakes than you do from your masterpieces. When you do it your way you can go anywhere you choose.</p>
					<p>Let's just drop a little Evergreen right here. Anything you want to do you can do here. Just let go - and fall like a little waterfall. The little tiny Tim easels will let you down.</p>
					<p>We don't have to be concerned about it. We just have to let it fall where it will. Just take out whatever you don't want. It'll change your entire perspective. It's important to me that you're happy.</p>
					<p>There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Everyone is going to see things differently - and that's the way it should be. Clouds are free. They just float around the sky all day and have fun. Everyone needs a friend. Friends are the most valuable things in the world. Learn when to stop. Here's another little happy bush</p>
					<p>See there, told you that would be easy. There's nothing wrong with having a tree as a friend. Mountains are so simple, they're hard. Didn't you know you had that much power? You can move mountains. You can do anything. Just pretend you are a whisper floating across a mountain. We'll throw some old gray clouds in here just sneaking around and having fun.</p>
					<p>Play with the angles. Making all those little fluffies that live in the clouds. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is the way you take out your flustrations. We must be quiet, soft and gentle. There are no limits in this world.</p>
					<p>I thought today we would do a happy little picture. Just let this happen. We just let this flow right out of our minds. A happy cloud.</p>
					<p>You got your heavy coat out yet? It's getting colder. Sometimes you learn more from your mistakes than you do from your masterpieces. When you do it your way you can go anywhere you choose.</p>
					<p>Let's just drop a little Evergreen right here. Anything you want to do you can do here. Just let go - and fall like a little waterfall. The little tiny Tim easels will let you down.</p>
					<p>We don't have to be concerned about it. We just have to let it fall where it will. Just take out whatever you don't want. It'll change your entire perspective. It's important to me that you're happy.</p>
					<p>There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Everyone is going to see things differently - and that's the way it should be. Clouds are free. They just float around the sky all day and have fun. Everyone needs a friend. Friends are the most valuable things in the world. Learn when to stop. Here's another little happy bush</p>
					<p>See there, told you that would be easy. There's nothing wrong with having a tree as a friend. Mountains are so simple, they're hard. Didn't you know you had that much power? You can move mountains. You can do anything. Just pretend you are a whisper floating across a mountain. We'll throw some old gray clouds in here just sneaking around and having fun.</p>
					<p>Play with the angles. Making all those little fluffies that live in the clouds. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. This is the way you take out your flustrations. We must be quiet, soft and gentle. There are no limits in this world.</p>
					<p>I thought today we would do a happy little picture. Just let this happen. We just let this flow right out of our minds. A happy cloud.</p>
					<p>You got your heavy coat out yet? It's getting colder. Sometimes you learn more from your mistakes than you do from your masterpieces. When you do it your way you can go anywhere you choose.</p>
					<p>Let's just drop a little Evergreen right here. Anything you want to do you can do here. Just let go - and fall like a little waterfall. The little tiny Tim easels will let you down.</p>
					<p>We don't have to be concerned about it. We just have to let it fall where it will. Just take out whatever you don't want. It'll change your entire perspective. It's important to me that you're happy.</p>
				</blockquote>
			</snail-panel>

			<snail-panel data-route="#/right">
				<h2>Right-hand panel</h2>
			</snail-panel>
		</snail-system>
	`,
});
//# sourceMappingURL=index.html.js.map