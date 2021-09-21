class FixTaskIdAtParticipants < ActiveRecord::Migration[6.1]
  def change
    rename_column :participants, :tasks_id, :task_id
  end
end
