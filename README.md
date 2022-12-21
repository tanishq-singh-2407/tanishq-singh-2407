# _**Hey, Kaju here 🦑**_
### **Personal Stuff**
- ⚔️ In _`grade 12th`_ and _`17`_ (batch 2022-23).
- 🦋 Have a _`girlfrind`_.
- 🥺 All time favs.
    - [_**Dil Tadap Tadap Ke kKah Raha.**_](https://open.spotify.com/track/2kVKDFmDFuKNR4tuDgZqWM?si=c73ba0545cea4e5b)
    - [_**Aap Ke Ankhon Mai Kutch.**_](https://open.spotify.com/track/2hWUcbgPqVsvsgHMWEvSUe?si=45c9eb4c6f074338)
    - [_**Tera Mujse Hai Nata Koi**_](https://open.spotify.com/track/3Jj02N4CsUY8YAn2d03M4K?si=4be4be82aa9d42f3)
- 🙂 Preparing for _**`JEE '23`**_, and have exam on `24th Jan`.
<details>
<summary><b>Contact</b></summary>

- 🥽 [folio](https://www.tanishqsingh.com)
- 📨 [hi@tanishqsingh.com](mailto:hi@tanishqsingh.com)
- 🏋🏽 [instagram](https://www.instagram.com/tanishq_singh_2301)

</details>
<details>
<summary><b>TechStack I use 🙂.</b></summary>
<b><small>Pretty much all the tech depends on what I've to make.</small></b>

</br>

#### _**Languages**_
- **`Typescript`, `Python`, `SQL`, `bash-script`, `cpp`, `solidity`, `gs`.**
- **`Tailwindcss`, `css`.**

#### _**Frontend**_
- **`Reactjs`, `Nextjs`, `Fresh`.**

#### _**Backend**_
- **`Deno`, `Lambda`, `API-Gateway`, `EC2`, `Google-DNS`, `Cloudflare`.**

#### _**Databases**_
- **`DynamoDB`, `MongoDB`, `Firebase`, `SupaBase`.**
- **`SQL` have a seperate space in my heart.**

#### _**Hosting Providers**_
- **`Vercel`, `Deno-Deploy`, `AWS`.**

#### _**Others**_
- **`Nginx`, `CI/CD`, `openssl`, `Docker`, `Elastic-Ip`, `Linux`.**

</br>

</details>
<details>
<summary><b>Hacktoberfest '22 - merged 11 pr's 😎.</b></summary>

|No.|Open-Source|link|
|-|-|-|
|1|`codecademy/docs`|[PR1](https://github.com/Codecademy/docs/pull/1181), [PR2](https://github.com/Codecademy/docs/pull/1043)|
|2|`codinasion/program`|[PR1](https://github.com/codinasion/program/pull/4727), [PR2](https://github.com/codinasion/program/pull/4724), [PR3](https://github.com/codinasion/program/pull/4723), [PR4](https://github.com/codinasion/program/pull/4719), [PR5](https://github.com/codinasion/program/pull/2166), [PR6](https://github.com/codinasion/program/pull/2164), [PR7](https://github.com/codinasion/program/pull/1979), [PR8](https://github.com/codinasion/program/pull/1978), [PR9](https://github.com/codinasion/program/pull/1975),|

</details>

---
### _**Game?? Activity:**_ [_**Make a wild guess**_](https://github.com/tanishq-singh-2301/tanishq-singh-2301/issues/new?template=wild-guess.md&title=And%20I%20guess%20(0-9):%20&labels=wild%20guess), _**`number?`**_

<details>
<summary><b>LuckBoard 🦕</b></summary>

<table>
    <tr>
        <th>Position</th>
        <th>Avatar</th>
        <th>User Name</th>
        <th>No. of time guessed correct</th>
        <th>Issues</th>
    </tr>
    
</table>

</details>
<details>
<summary><b>Previous Games 🏑</b></summary>

<table>
    <tr>
        <th>Game No</th>
        <th>Avatar</th>
        <th>User Name</th>
        <th>Issue No</th>
        <th>What Gussed?</th>
        <th>Actual No.</th>
    </tr>
    <tr>
        <td align="center"><b><i> 1 </i></b></td>
        <td> <img src="https://avatars.githubusercontent.com/tanishq-singh-2301?s=24" width="24px" height="24px" /> </td>
        <td><b><i><a href="https://github.com/tanishq-singh-2301"> tanishq-singh-2301 </a></i></b></td>
        <td align="center"><b><i> 61 </i></b></td>
        <td align="center"><b><i> 6 </i></b></td>
        <td align="center"><b><i> 3 </i></b></td>
    </tr>
    
</table>

</details>
<details>
<summary><b>How it works 🤔</b></summary>

- #### _**Backend**_

    ```mermaid
    graph LR
    A[New Issue] --> B{Trigger Workflow}
    B -- accept --> E[Generate Random Number]
    E --> F{Is Matched?}
    F -- Yes --> H[Update Issue - got it]
    F -- No --> G[Update Issue - missed it]
    G --> I[Close Issue]
    H --> I[Close Issue]
    I --> J[Update DB]
    J --> K[Render README.md]
    K --> L[git push]
    B -- reject --> C[Update Issue]
    C --> D[Close Issue]

    ```

- #### _**Database**_

    ```mermaid
    classDiagram
        class WildGuess
        WildGuess : +INT issue_number
        WildGuess : +INT2 guessed_number
        WildGuess : +INT2 actual_number
        WildGuess : +VARCHAR(60) username
        WildGuess : +TIMESTAMP created_at

    ```

</details>

---
##### 🤫 Psst! look here, my [folio.](https://www.tanishqsingh.com)