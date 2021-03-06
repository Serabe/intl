import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @State() greeting: string;
  @State() profileLink: string;

  render() {
    return (
      <div class='app-home'>
        <h2> <intl-phrase name="greeting" /> </h2>
        
        <article>
          <p>
            <intl-phrase name="welcome" />
          </p>
          <p>
            <intl-phrase name="build" />
          </p>
          <p>
            <intl-phrase name="docs.start" /> <a href='https://stenciljs.com'>stenciljs.com</a> <intl-phrase name="docs.end" />
          </p>
        </article>
        

        <intl-preload name="profile">
          <stencil-route-link url='/profile/stencil'>
            <button>
              <intl-phrase name="profileLink"/>
            </button>
          </stencil-route-link>
        </intl-preload>
      </div>
    );
  }
}
