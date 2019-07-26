# Async timeout
A simple JavaScript timeout utility allowing a more convenient use of setTimeout.

## Examples

```
import timeout from './timeout';

async function example1() {
	await timeout(1000); // waits 1 second

	doSomething();

	await timeout(1000); // waits for another second

	doSomethingElse();
}

function example2() {
	if (thisIsTrue) {
		timeout(1000).then(() => {
			doItThen(); // after 1 second
		});
	}

	andDoThisEitherWay(); // immediately
}

function example3() {
	const myTimeout = timeout(1000);

	myTimeout.then(() => {
		doSomething(); // do something unless following condition is true
	});

	if (thisIsTrue) {
		myTimeout.clear();
	}
}
```
