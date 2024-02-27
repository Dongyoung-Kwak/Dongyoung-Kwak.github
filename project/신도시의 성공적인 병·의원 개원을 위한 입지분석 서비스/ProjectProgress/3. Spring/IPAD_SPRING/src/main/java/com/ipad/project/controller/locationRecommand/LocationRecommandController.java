package com.ipad.project.controller.locationRecommand;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ipad.project.controller.IController;
import com.ipad.project.locationRecommand.model.RecommandVO;
import com.ipad.project.locationRecommand.service.IRecommandService;

@Controller
public class LocationRecommandController implements IController {

		@Autowired
		IRecommandService recommandService;
	
		@RequestMapping(value="/locationRecommand/recommand")
		public String viewRecommand(Model model) {
			return "locationRecommand/recommand";
		}
		@RequestMapping(value ="/json/locationRecommand")
		public @ResponseBody List<RecommandVO>  getRegionList(@RequestBody Map<String, Boolean> data, Model model) {
			boolean opt1 = data.get("checkOrth");
			boolean opt2 = data.get("checkImpl");
			List<RecommandVO> recommand = recommandService.recommandRegion(opt1, opt2);
			return recommand;
		}
		
		@RequestMapping(value="/json/predict")
		public @ResponseBody RecommandVO predictData(@RequestBody String adm_nm, Model model) {
			System.out.println("predict");
			RecommandVO recommand = recommandService.regionInfo(adm_nm);
			return recommand;
		}
	
}
