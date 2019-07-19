# Answers

- [ ] Why are forms used so often in web applications and software?
    Forms are the easiest (that I know of) way to get information from the user, and know that it will fit the object shape you need for your server.

- [ ] What advantages are there by using a forms library like Formik?
    Formik abstracts on Change and handleSubmit functions, as well as state. and also makes it easier for your Form to be reusable in different places

- [ ] What is stateful logic?
    stateful logic is logiv where something will render conditionally depending on if something in state exists

- [ ] What is a custom hook, and what does it mean to compose hooks together?
    A custom hook is a hook that both creates state using [state, setState], but then also involves another function that allows us to do something with that state at the same time. Composing hooks together means we are combining hooks to create a custom hook that accomplishes multiple things at once

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.
    When we give the server a matching username and password in a axios.post, we are given back a response which will contain a token somewhere inside. We then include this token to prove to the server we are who we say we are when we begin to make requests to see, edit, add/delete data.
