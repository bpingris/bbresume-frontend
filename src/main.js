import { dictionary, locale } from "svelte-i18n";
import App from './App.svelte';
import { user } from "./store/user";

dictionary.set({
	en: {
		contact: "Contact",
		skills: "Skills",
		hobbies: "Hobbies",
		experiences: "Experiences",
		formation: "Formations",
	},
	fr: {
		contact: "Contact",
		skills: "compétences",
		hobbies: "Loisirs",
		experiences: "Expériences",
		formation: "Formations",
	},
});

user.subscribe(o => {
	locale.set(o.language)
})

const app = new App({
	target: document.body
});

export default app;