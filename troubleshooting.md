# Debugging and Troubleshooting

Debug for 15 minutes. 

## Method

1. Verify concern
1. Visually Inspect
1. Error Message
1. Analyze code line by line (rubber ducking)
1. Isolate the issue (and start from step 1)
1. Search Google
    1. Error Message
    1. Common Cause
1. Formulate a question an escalate

### Verify Concern

### Visually Inspect

Check and fix any linter issues: semi-colons, spacing, etc.

### Error Message

Read any error messages. Follow the stacktrace through your
code (ignore any lines that are in libraries) and examine
the lines. For example:

```
/home/ryan/script/error.js:3
console.log(animal.name.split(''));
                        ^

TypeError: Cannot read property 'split' of undefined
    at Object.<anonymous> (/home/ryan/script/error.js:3:25)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
```

In the above stacktrace there is an error on line 3:

```
/home/ryan/script/error.js:3
```

with the following error message:

```
TypeError: Cannot read property 'split' of undefined
```

### Analyze code line by line

Talk through each line of your code. For example:

```js
const animal = {};

console.log(animal.name.split(''));
```

On line one we define a constant `animal` and
set its value to an empty object. Next, on line
three we get the name property from animal which
is `undefined` since animal is set to an empty
object on line one. We then call split on `undefined`
since `animal.name` is `undefined`.

Use debugger (Chrome or vscode).

### Isolate the issue

Make sure the issue is isolated. Remove any ambiguity.
It may be necessary to comment out code.

### Search Google

Use google to find other people that have had the same
issue. How did they fix it?

#### Error Message

Search for the error message that you have. What
is the cause of that error message? Do it sound
like it can be your issue?

#### Common Cause

Search the error symptoms and find common causes. How
can you tell if this is the cause (maybe they have ways)
you can isolate that cause. How do you fix the issue?

### Formulate a question and escalate

Formulate a question that won't require further follow-up
clarifying questions. In other words, ask an answerable
question.

Check Slack to see if someone already asked a similar question.
If so, check to see if there is a reply to the question already.
If there is no reply, go to the student with a similar question.
Work together to find an answer while waiting for a TA.

If no one has asked a similar question, post your question in Slack.

Once you've found an answer to your question, reply to your Slack
message explaining what you did to fix your issue.
