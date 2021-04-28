package ua.app.classroom;

import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import java.io.Serializable;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;


@Named
@SessionScoped
public class User implements Serializable {

    private String fullName;
    private final static Set<String> USER_BEAN_LIST = new CopyOnWriteArraySet<>();

    public Set<String> getUserList() {
        return USER_BEAN_LIST;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String authorizationUser() {
        if (!USER_BEAN_LIST.contains(fullName) && !fullName.trim().isEmpty()) {
            USER_BEAN_LIST.add(fullName);
            FacesContext context = FacesContext.getCurrentInstance();
            context.getExternalContext().getSessionMap().put("user", fullName);
            ClassroomWebSocket.userConnected(fullName);
            return "members?faces-redirect=true";
        } else {
            FacesMessage message = new FacesMessage("this login is already taken", "ERROR MSG");
            FacesContext.getCurrentInstance().addMessage("clientId", message);
            return "";
        }
    }

    public String logOut() {
        USER_BEAN_LIST.remove(fullName);
        FacesContext.getCurrentInstance().getExternalContext().invalidateSession();
        ClassroomWebSocket.userDisconnected(fullName);
        return "login?faces-redirect=true";
    }

    public String checkAuthorization() {
        FacesContext context = FacesContext.getCurrentInstance();
        Object user = context.getExternalContext().getSessionMap().get("user");
        if (user == null) {
            return "login?faces-redirect=true";
        }
        return "";
    }

    public void handUp() {
        ClassroomWebSocket.userHandUp(fullName);
    }

    public void handDown() {
        ClassroomWebSocket.userHandDown(fullName);
    }
}