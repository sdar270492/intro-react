function SeasonFilter({season, filterSeason}) {
    const seasons = [1,2,3,4,5,6,7,8];

    return (
        <div className="btn-group" role="group" aria-label="Default button group">
            {seasons.map((s) => (
                <button 
                    key={s}
                    onClick={() => {filterSeason(s)}}
                    type="button" 
                    className={`btn btn-secondary ${s === season ? 'active' : ''}`}                    
                    >S{s}
                </button>
            ))}
        </div>
    );
}

export default SeasonFilter;