package com.creeperstone72.bartenders_companion_back.data_jpa.service;

import com.creeperstone72.bartenders_companion_back.data_jpa.model.Cocktail;
import com.creeperstone72.bartenders_companion_back.data_jpa.repository.CocktailRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CocktailService {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Attributes /////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////
    @Autowired
    private CocktailRepository repo;

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Methods ////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////
    public void save(Cocktail product) { repo.save(product); }
    public Cocktail get(Integer id) { return repo.findById(id).get(); }
    public List<Cocktail> listAll() { return repo.findAll(); }
    public void delete(Integer id) { repo.deleteById(id); }
}
