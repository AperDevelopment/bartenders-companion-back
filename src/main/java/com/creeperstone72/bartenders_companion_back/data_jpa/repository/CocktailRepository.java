package com.creeperstone72.bartenders_companion_back.data_jpa.repository;

import com.creeperstone72.bartenders_companion_back.data_jpa.model.Cocktail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CocktailRepository extends JpaRepository<Cocktail, Integer> { }
