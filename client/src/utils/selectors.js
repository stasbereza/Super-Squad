export const getVisibleHeroes = (heroes, squadHeroIds, filter) => {
  const availableHeroes = heroes.filter(hero => {
    const isInSquad = squadHeroIds.includes(hero.id);

    return !isInSquad && hero;
  });

  const visibleHeroes = availableHeroes.filter(hero =>
    hero.name.toLowerCase().includes(filter)
  );

  return visibleHeroes;
};

export const getSquadHeroes = (heroes, squadHeroIds) => {
  const squadHeroes = heroes.filter(hero => {
    const isInSquad = squadHeroIds.includes(hero.id);

    return isInSquad && hero;
  });

  return squadHeroes;
};

export const getSquadStats = squadHeroes => {
  if (squadHeroes.length > 0) {
    const heroesStats = squadHeroes.reduce((acc, hero) => {
      if (!acc) {
        return {
          strength: hero.strength,
          intelligence: hero.intelligence,
          speed: hero.speed
        };
      }

      return {
        strength: acc.strength + hero.strength,
        intelligence: acc.intelligence + hero.intelligence,
        speed: acc.speed + hero.speed
      };
    });

    return heroesStats;
  }

  return {
    strength: 0,
    intelligence: 0,
    speed: 0
  };
};
