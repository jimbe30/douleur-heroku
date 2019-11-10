package net.jimbe.douleur.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.jimbe.douleur.beans.Prescription;
import net.jimbe.douleur.dao.NomenclatureRepository;
import net.jimbe.douleur.entity.Nomenclature;
import net.jimbe.douleur.services.ServiceDouleur;

@RestController
@RequestMapping("/douleurs")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrdonnanceDouleurController {
	
	@Autowired
	NomenclatureRepository nomenclatureRepository;
	@Autowired
	ServiceDouleur serviceDouleur;

	@RequestMapping("/")
	public List<Nomenclature> getNomenclatureDouleur() {
		List<Nomenclature> nomenclatures = nomenclatureRepository.findByNomenclatureParentIsNull();
		return nomenclatures;
	}
	
	@RequestMapping("/test")
	public Prescription test() {
		return new Prescription();
	}
	
	@RequestMapping("/{idDouleur}")
	public List<Prescription> getFicheDouleur(@PathVariable int idDouleur) {
		List<Prescription> presciptions = serviceDouleur.getPrescriptionsProposees(idDouleur);
		return presciptions;
	}
}
