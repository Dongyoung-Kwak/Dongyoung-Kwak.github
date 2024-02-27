package com.ipad.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ipad.project.controller.locationRecommand.LocationRecommandController;

@Controller
public class DispatcherServlet {
	
	@Autowired
	IController controller = null;
	
	@RequestMapping (value="/project/locationRecommand")
	public void recommandController(Model model) {
		controller = new LocationRecommandController();
		controller.viewRecommand(model);
	}
	@RequestMapping(value="/project/index")
	public String viewMain(Model model) {
		return "main";
	}
}
