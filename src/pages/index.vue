<template>
  <main class="sheet">
    <div class="grid grid-cols-12 gap-6">
      <div class="flex flex-row col-span-8">
        <img src="~/assets/headshot.webp" alt="Headshot Photo" class="object-cover w-32 h-32 border-2 border-indigo-600 rounded-full">
        <div class="flex flex-col ml-12">
          <div class="text-2xl font-medium">
            Dan Beneventano
          </div>
          <div class="mb-1 text-gray-700 text-md">
            Full Stack Software Engineer
          </div>
          <a class="altlink" href="https://www.github.com/danbeneventano" target="_blank" rel="noopener">
            <img src="~/assets/logos/github-brands.svg" class="w-4 h-4" alt="GitHub logo">
            <div class="ml-4">github.com/danbeneventano</div>
          </a>
          <a class="altlink" href="https://danbeneventano.me" target="_blank" rel="noopener">
            <img src="~/assets/logos/link-solid.svg" class="w-3 h-3" alt="Link icon">
            <div class="ml-5">danbeneventano.me</div>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-end col-span-4">
        <a class="link" href="mailto:danbeneventano@gmail.com" rel="noopener">
          <img src="~/assets/logos/envelope-solid.svg" class="w-3 h-3" alt="Email icon">
          <div class="ml-4">danbeneventano@gmail.com</div>
        </a>
        <a class="link" href="tel:+1201-919-1125" rel="noopener">
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
            <a href="https://cometx.io" target="_blank" rel="noopener">
              <img src="~/assets/logos/cometx_logo.svg" class="h-4 m-1" alt="CometX logo">
            </a>
            <span class="ml-3 text-xs text-gray-700">July 2019 – Present &middot; <a href="https://cometx.io" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">Link</a> &middot; <a href="https://github.com/comet-app/cometx" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">GitHub</a></span>
          </div>
          <span class="mt-1 text-sm italic font-semibold text-gray-700">Co-Founder & Lead Software Engineer</span>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              <a href="https://cometx.io" target="_blank" rel="noopener" class="hover:underline">CometX.io</a> is a new and growing platform for creating online communities and sharing posts and comments. CometX launched in August 2020, and has already amassed over 500 daily users.
            </p>
            <p class="mt-1">
              <a href="https://cometx.io" target="_blank" rel="noopener" class="hover:underline">CometX.io</a> uses Vue.js in the frontend, Node.js, GraphQL and SQL in the backend, and Docker for deployment.
            </p>
            <p class="mt-1">
              I programmed the entire <a href="https://cometx.io" target="_blank" rel="noopener" class="hover:underline">CometX.io</a> platform (frontend and backend), automated deployment, and grew a dedicated community. <a href="https://cometx.io" target="_blank" rel="noopener" class="hover:underline">CometX.io</a> is open source and the code is available on <a class="text-indigo-600 hover:underline" href="https://github.com/comet-app/cometx" target="_blank" rel="noopener">our GitHub</a>.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col mt-3"
        >
          <span>
            <span class="font-medium">Freelance Java Developer & System Administrator</span>
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
            <a href="https://devpost.com/software/hand-of-god-tdjxr8" target="_blank" rel="noopener" class="font-medium">Hand of God</a>
            <span class="ml-1 text-xs text-gray-700">February 2020 &middot; <a href="https://devpost.com/software/hand-of-god-tdjxr8" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">Link</a> &middot; <a href="https://github.com/The-Hand-of-God" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">GitHub</a></span>
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
            <a href="https://github.com/danbeneventano/resume" target="_blank" rel="noopener" class="font-medium">This Resume</a>
            <span class="ml-1 text-xs text-gray-700">September 2020 &middot; <a href="https://resume.danbeneventano.me" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">Link</a> &middot; <a href="https://github.com/danbeneventano/resume" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">GitHub</a></span>
          </span>
          <span class="mt-1 text-sm italic text-gray-700">This resume is actually a website!</span>
          <div class="mt-1 text-sm text-gray-700">
            <p>
              In order to exercise my design skills and create a great resume, I programmed this resume as a website using Vue.js and TailwindCSS. The resume is available online at <a href="https://resume.danbeneventano.me" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">danbeneventano.me</a>, and is open source on <a href="https://github.com/danbeneventano/resume" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">GitHub</a>!
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
            <a href="https://www.mines.edu" target="_blank" rel="noopener">
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
            Currently enrolled in <span class="font-medium">Software Engineering</span> (CSCI306) and <span class="font-medium">Discrete Math</span> (CSCI358)
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
            <img src="~/assets/logos/javascript.svg" class="z-10 rounded" alt="JavaScript/TypeScript logo">
            <span>JavaScript/TypeScript</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/code-solid.svg" alt="HTML/CSS icon">
            <span>HTML/CSS</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/vuejs-brands.svg" alt="Vue.js logo">
            <span>Vue.js</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/node-js-brands.svg" alt="Node.js logo">
            <span>Node.js</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/graphql.svg" alt="GraphQL logo">
            <span>GraphQL</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/postgresql.svg" alt="SQL logo">
            <span>SQL</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/git-alt-brands.svg" alt="Git logo">
            <span>Git</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/docker-brands.svg" alt="Docker logo">
            <span>Docker</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/linux-brands.svg" alt="Linux logo">
            <span>Linux</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/java-brands.svg" alt="Java logo">
            <span>Java</span>
          </div>
          <div
            class="skill"
          >
            <img src="~/assets/logos/kotlin.svg" alt="Kotlin logo">
            <span>Kotlin</span>
          </div>
        </div>
        <div
          class="mt-6 mb-3 text-xs tracking-widest text-gray-700 uppercase"
        >
          CLUBS & HOBBIES
        </div>
        <div
          class="multilinehobby"
        >
          <img src="~/assets/logos/keyboard-solid.svg" alt="Association for Computing Machinery icon">
          <span>Association for Computing Machinery</span>
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/swimmer-solid.svg" alt="Club Water Polo icon">
          <span>Club Water Polo</span>
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/guitar-solid.svg" alt="Guitar icon">
          <span>Guitar</span>
        </div>
        <div
          class="hobby"
        >
          <img src="~/assets/logos/snowboarding-solid.svg" alt="Snowboarding icon">
          <span>Snowboarding</span>
        </div>
      </div>
    </div>
  </main>
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

.skill > img {
  @apply w-4 h-4;
}

.skill > span {
  @apply ml-4 text-sm;
}

.hobby {
  @apply inline-flex flex-row items-center mb-3 text-sm text-gray-700;
}

.hobby > img {
  @apply w-4 h-4;
}

.hobby > span {
  @apply ml-4 text-sm;
}

.multilinehobby {
  @apply inline-flex flex-row mb-3 text-sm text-gray-700;
}

.multilinehobby > img {
  margin-top: 2px;
  @apply w-4 h-4;
}

.multilinehobby > span {
  @apply ml-4 text-sm;
}
</style>
