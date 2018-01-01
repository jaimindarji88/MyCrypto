import React from 'react';
import { IRevealDomainRequest } from 'libs/ens';
import ENSTime from './components/ENSTime';
import { UnitDisplay } from 'components/ui';
import { Wei } from 'libs/units';
import { ENSWallet } from './components/ENSWallet';
import { RevealBid } from './components/RevealBid';
import ENSUnlockLayout from './components/ENSUnlockLayout';

export const NameReveal: React.SFC<IRevealDomainRequest> = props => (
  <section className="row text-center">
    <h1>
      <p>
        It's time to reveal the bids for <strong>{props.name}.eth.</strong>{' '}
      </p>
      <p>
        Current Highest bid is{' '}
        <strong>
          <UnitDisplay
            value={Wei(props.highestBid)}
            unit="ether"
            symbol="ETH"
            displayShortBalance={false}
            checkOffline={false}
          />
        </strong>
      </p>
    </h1>
    <ENSTime text="Auction closes on" time={+props.registrationDate * 1000} />

    <ENSWallet text={`Did you you bid on ${props.name}.eth? You must reveal your bid now.`}>
      <ENSUnlockLayout>
        <RevealBid buttonName="Start the Auction" title="Reveal Your Bid" {...props} />
      </ENSUnlockLayout>
    </ENSWallet>
  </section>
);