<template>
  <div class="interior">
    <div class="wrap">
      <div class="sub-section">
        <h2>Code</h2>
        <p>I am not a great computer programmer, but I enjoy the work I do. I spend
          more time thinking about what I would make than actually making anything. The upside
          is that I also don't write many bugs!</p>
      </div>

      <div class="sub-section">
        <h3>Files</h3>
        <p>Recommended programming books ad files</p>
      </div>
      <!-- <div class="sub-section">
        <table>
          <tbody><tr>
              <td width="100%" bgcolor="#FF0000"><font color="#FFFFFF"><strong>July 6th, 1998</strong></font></td>
            </tr>
            <tr>
              <td width="100%">As you probably know, DETH development is halted at this point.
              &nbsp; However, if someone can get me some info on the AOLs that are located in the \tool
              dir, I might be motivated to start up DETH again.&nbsp; What I want information on is any
              function definitions that might exist for the *.AOL files (which are actually DLLs so
              brilliantly renamed to AOL to confuse us).&nbsp; I am ESPECIALLY interested in the
              function defs. for SUPERSUB.DLL.&nbsp; If you have any info, contact me at once. <p>That
              is all.<strong><br>
              -Hit</strong></p></td>
            </tr>
          </tbody>
          </table>
      </div> -->

      <div class="sub-section">
        <h3>Repos</h3>
        <p>Here are some projects I have started and will hopefully finish someday.</p>

        <ul>
          <li><a href="#">.dotfiles</a> :: These are my personal configuration files.
            You probably shouldn't use them as-is.</li>
          <li><a href="#">demonlord.vue</a> :: This website, built with Vue. </li>
          <li><a href="#">demonlord-theme-vscode</a> :: My personal VSCode theme.</li>
          <li><a href="#">project-name</a> :: This is a project I started to generate project names
            on the command line.</li>
          <li><a href="#">snack-vote</a> :: A prototype for a system to vote on what snacks to buy for
            your office, built with React.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Snippets</h3>
        <p>A few of my personal snippets containing some code I like to reuse. I'm not sure how much
          of these I actually wrote anymore.</p>

        <ul>
          <li><a href="#">animation-behaviors.scss</a> :: Some mixins and includes for simple movement.</li>
          <li><a href="#">blackNoise.js</a> :: This can actually be any color but black noise sounds cool.</li>
          <li><a href="#">colorBlast.js</a> :: Furious BG color changer. Please don't look at this if you are epileptic.</li>
          <li><a href="#">userChrome.css</a> :: My Firefox userChrome .css file.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Shell Scripts</h3>
        <p>Not sure why these aren't just gists? I wanted a new section.</p>

        <ul>
          <li><a href="#">github-cloneall.sh</a> :: Shell script with some Ruby to clone all of a user's github repos.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>IRC Scripts</h3>
        <p>Scripts for IRSSI as well as some legacy scripts and clients.</p>

        <ul>
          <li><a href="#">github-cloneall.sh</a> :: Shell script with some Ruby to clone all of a user's github repos.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Reaktor Software</h3>
        <img src="//placehold.it/720x320" alt="Reaktor" />
        <strong></strong>
      </div>

      <div class="sub-section">
        <h3>Max/MSP</h3>
        <ul>
          <li><a href="#">maxpatch-0.1.0</a> :: A new maxpatch that I don't know what it does</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Supercollider Live Code</h3>
        <code>
          //Chaos engine hum
          ({ SinOsc.ar(10 + (50 * SinOsc.kr([50, 51], 0,
            SinOsc.kr(101, Saw.kr(0.12345, 678, 9), 0.2, 0.8),
            Pulse.kr([25, 25.5], 0.25, 0.125, -0.25))), 0, 0.5, 0);
            }.play();)
        </code>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageWarez'
  }
</script>
