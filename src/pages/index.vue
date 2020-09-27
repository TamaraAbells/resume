<template>
  <div class="sheet">
    <div class="grid grid-cols-12 gap-6">
      <div class="flex flex-row col-span-8">
        <img src="~/assets/headshot.jpg" class="object-cover w-32 h-32 border-2 border-indigo-600 rounded-full">
        <div class="flex flex-col ml-12">
          <div class="text-2xl font-semibold">
            Dan Beneventano
          </div>
          <div class="mb-1 text-gray-700 text-md">
            Full Stack Software Engineer
          </div>
          <a class="altlink" href="https://www.github.com/danbeneventano" target="_blank">
            <img src="~/assets/logos/github-brands.svg" class="w-4 h-4" alt="GitHub logo">
            <div class="ml-4">github.com/danbeneventano</div>
          </a>
          <a class="altlink" href="https://danbeneventano.me" target="_blank">
            <img src="~/assets/logos/link-solid.svg" class="w-3 h-3" alt="Link icon">
            <div class="ml-5">danbeneventano.me</div>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-end col-span-4">
        <a class="link" href="mailto:dan@cometx.io">
          <img src="~/assets/logos/envelope-solid.svg" class="w-3 h-3" alt="Email icon">
          <div class="ml-4">danbeneventano@gmail.com</div>
        </a>
        <a class="link" href="tel:+1201-919-1125">
          <img src="~/assets/logos/phone-alt-solid.svg" class="w-3 h-3" alt="Phone icon">
          <div class="ml-4">+1 (201) 919-1125</div>
        </a>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-6">
      <div class="col-span-9">
        <div
          class="mb-3 text-xs tracking-widest text-gray-700 uppercase"
        >
          EXPERIENCE
        </div>
        <div
          class="flex flex-col"
        >
          <div class="flex flex-row items-end">
            <a href="https://cometx.io" target="_blank">
              <img src="~/assets/logos/cometx_logo.svg" class="h-4 m-1" alt="CometX logo">
            </a>
            <span class="ml-3 text-xs text-gray-700">July 2019 – Present &middot; <a href="https://cometx.io" target="_blank" class="text-indigo-600 hover:underline">Link</a> &middot; <a href="https://github.com/comet-app/cometx" target="_blank" class="text-indigo-600 hover:underline">GitHub</a></span>
          </div>
          <span class="mt-1 text-sm italic font-semibold text-gray-700">Co-Founder & Lead Software Engineer</span>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              <a href="https://cometx.io" target="_blank" class="hover:underline">CometX.io</a> is a new and growing platform for creating online communities and sharing posts and comments. CometX launched in August 2020, and has already amassed over 500 daily users.
            </p>
            <p class="mt-1">
              <a href="https://cometx.io" target="_blank" class="hover:underline">CometX.io</a> uses Vue.js in the frontend, Node.js, GraphQL and SQL in the backend, and Docker for deployment.
            </p>
            <p class="mt-1">
              I programmed the entire platform (frontend and backend), automated deployment, and grew a dedicated community. CometX.io is open source and the code is available on <a class="text-indigo-500 hover:underline" href="https://github.com/comet-app/cometx" target="_blank">our GitHub</a>.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col mt-3"
        >
          <span>
            <span class="font-semibold">Freelance Java Developer & System Administrator</span>
            <span class="ml-1 text-xs text-gray-700">2014 - 2018</span>
          </span>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              Worked with five Minecraft multiplayer servers to program features and modifications using Java and SQL. Performed Linux and database administration.
            </p>
          </div>
        </div>

        <div
          class="mt-6 mb-3 text-xs tracking-widest text-gray-700 uppercase"
        >
          PROJECTS
        </div>
        <div
          class="flex flex-col"
        >
          <span>
            <a href="https://devpost.com/software/hand-of-god-tdjxr8" target="_blank" class="font-semibold">Hand of God</a>
            <span class="ml-1 text-xs text-gray-700">February 2020 &middot; <a href="https://devpost.com/software/hand-of-god-tdjxr8" target="_blank" class="text-indigo-600 hover:underline">Link</a> &middot; <a href="https://github.com/The-Hand-of-God" target="_blank" class="text-indigo-600 hover:underline">GitHub</a></span>
          </span>
          <span class="mt-1 text-sm italic text-gray-700">Built at HackCU 2020 – Second place winner</span>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              Hand of God is a Python program that allows users to interact with Internet-of-Things (IoT) devices with the "Tap Strap 2" wearable keyboard.
            </p>
            <p class="mt-1">
              Hand of God won first place for "Best Use of TapWithUs SDK" and second place overall at HackCU 2020 (Boulder, CO).
            </p>
          </div>
        </div>

        <div
          class="flex flex-col mt-3"
        >
          <span>
            <a href="https://github.com/danbeneventano/resume.danbeneventano.me" target="_blank" class="font-semibold">This Resume</a>
            <span class="ml-1 text-xs text-gray-700">September 2020 &middot; <a href="https://resume.danbeneventano.me" target="_blank" class="text-indigo-600 hover:underline">Link</a> &middot; <a href="https://github.com/danbeneventano/resume.danbeneventano.me" target="_blank" class="text-indigo-600 hover:underline">GitHub</a></span>
          </span>
          <span class="mt-1 text-sm italic text-gray-700">This resume is actually a website!</span>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              In order to exercise my design skills and create a great resume, I programmed this resume as a website using Vue.js and TailwindCSS. The resume is available online at <a href="https://resume.danbeneventano.me" target="_blank" class="text-indigo-600 hover:underline">danbeneventano.me</a>, and is open source on <a href="https://github.com/danbeneventano/resume.danbeneventano.me" target="_blank" class="text-indigo-600 hover:underline">GitHub</a>!
            </p>
          </div>
        </div>

        <div
          class="mt-6 mb-3 text-xs tracking-widest text-gray-700 uppercase"
        >
          EDUCATION
        </div>
        <div
          class="flex flex-col"
        >
          <div class="flex flex-row items-end">
            <a href="https://www.mines.edu" target="_blank">
              <img src="~/assets/logos/mines.png" class="h-10" alt="Colorado School of Mines logo">
            </a>
          </div>
          <div class="mt-3 text-sm font-semibold">
            Colorado School of Mines <span class="ml-1 text-xs font-normal text-gray-700">Golden, CO</span>
          </div>
          <div class="mt-1 text-sm font-semibold">
            B.S. Computer Science &middot; Graduating May 2022
          </div>
          <div class="mt-1 text-sm text-gray-700">
            GPA: 3.5/4.0 &middot; Computer Science GPA: 4.0/4.0
          </div>
          <div class="mt-1 text-sm text-gray-700">
            Currently enrolled in <span class="font-semibold">Software Engineering</span> (CSCI306) and <span class="font-semibold">Discrete Math</span> (CSCI358)
          </div>
        </div>
      </div>

      <div class="col-span-3">
        <div
          class="mb-3 text-xs tracking-widest text-gray-700 uppercase"
        >
          SKILLS
        </div>
        <div class="flex flex-col">
          <div
            class="relative skill"
          >
            <div class="absolute left-0 w-4 h-4 bg-black rounded-md" />
            <img src="~/assets/logos/javascript.svg" class="z-10 w-4 h-4 rounded" alt="JavaScript/TypeScript logo">
            <span class="ml-4 text-sm">JavaScript/TypeScript</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/code-solid.svg" class="w-4 h-4 text-gray-700" alt="HTML/CSS icon">
            <span class="ml-4 text-sm">HTML/CSS</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/vuejs-brands.svg" class="w-4 h-4" alt="Vue.js logo">
            <span class="ml-4 text-sm">Vue.js</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/node-js-brands.svg" class="w-4 h-4 rounded-full" alt="Node.js logo">
            <span class="ml-4 text-sm">Node.js</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/graphql.svg" class="w-4 h-4" alt="Node.js logo">
            <span class="ml-4 text-sm">GraphQL</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/postgresql.svg" class="w-4 h-4" alt="Node.js logo">
            <span class="ml-4 text-sm">SQL</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/git-alt-brands.svg" class="w-4 h-4" alt="Git logo">
            <span class="ml-4 text-sm">Git</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/docker-brands.svg" class="w-4 h-4" alt="Docker logo">
            <span class="ml-4 text-sm">Docker</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/linux-brands.svg" class="w-4 h-4" alt="Linux logo">
            <span class="ml-4 text-sm">Linux</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/java-brands.svg" class="w-4 h-4" alt="Java logo">
            <span class="ml-4 text-sm">Java</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/kotlin.svg" class="w-4 h-4" alt="Kotlin logo">
            <span class="ml-4 text-sm">Kotlin</span>
          </div>
        </div>
        <div
          class="mt-6 mb-3 text-xs tracking-widest text-gray-700 uppercase"
        >
          CLUBS & HOBBIES
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/keyboard-solid.svg" class="w-4 h-4 mt-1" alt="Association for Computing Machinery (Mines Chapter) icon">
          <span class="ml-4 text-sm">Association for Computing Machinery (Mines Chapter)</span>
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/swimmer-solid.svg" class="w-4 h-4 mt-1" alt="Club Water Polo icon">
          <span class="ml-4 text-sm">Club Water Polo</span>
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/guitar-solid.svg" class="w-4 h-4 mt-1" alt="Club Water Polo icon">
          <span class="ml-4 text-sm">Guitar</span>
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/snowboarding-solid.svg" class="w-4 h-4 mt-1" alt="Club Water Polo icon">
          <span class="ml-4 text-sm">Snowboarding</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.link {
  @apply inline-flex flex-row items-center mb-3 text-sm text-gray-700 hover:underline;
}

.altlink {
  @apply inline-flex flex-row items-center mb-1 text-sm text-gray-700 hover:underline;
}

.skill {
  @apply inline-flex flex-row items-center mb-3 text-sm text-gray-700;
}

.hobby {
  @apply inline-flex flex-row mb-3 text-sm text-gray-700;
}
</style>
