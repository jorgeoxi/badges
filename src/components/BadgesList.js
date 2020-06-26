import React from 'react';
import { Link } from 'react-router-dom'

import './styles/BadgeList.css';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase().includes(query.toLocaleLowerCase());
        });

        setFilteredBadges(result)
    }, [badges, query]);

    return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
    const badges = props.badges;

    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    return (
        <ul className="list- unstyled" >
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            {filteredBadges.map(badge => {
                return (
                    <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`} key={badge.id}>
                        <li
                            className="BadgesListItem mb-2">
                            <Gravatar email={badge.email} alt="" className="BadgesListItem__avatar" />
                            <div className="BadgesListLi">
                                <div>{badge.firstName} {badge.lastName}</div>
                                <div className="Twitter__name">
                                    <span className="Twitter__logo"></span>
                                    @{badge.twitter}
                                </div>
                                <div>{badge.jobTitle}</div>
                            </div>
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
}

export default BadgesList;