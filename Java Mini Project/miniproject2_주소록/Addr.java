package miniproject.miniproject2;

public class Addr {

	private String name;
	private String phoneNumber;
	private String email;
	private String addr;
	private String group;
	
	Addr(){}
	public Addr(String name, String phoneNumber, String email, String addr, String group) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.addr = addr;
		this.group = group;
	}

	public void printInfo() {
		
	}

	public String getName() {
		return name;
	}

	void setName(String name) {
		this.name = name;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return addr;
	}

	void setAddress(String addr) {
		this.addr = addr;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}
	

}
