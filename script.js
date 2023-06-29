import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class FlightBookingApplication {

    public static void main(String[] args) {
        SpringApplication.run(FlightBookingApplication.class, args);
    }

    @GetMapping("/")
    public String home(Model model) {
        // Adicione aqui a lógica para recuperar informações de voos e passar para o modelo
        // Exemplo: List<Flight> flights = flightService.getAllFlights();
        //          model.addAttribute("flights", flights);

        return "index";
    }
}
