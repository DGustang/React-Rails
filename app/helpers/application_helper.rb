module ApplicationHelper
  def active_class(main_path)
    active = current_page?(main_path) ? "active" : ""
  end
end
